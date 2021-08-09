package com.jlr.core.schedulers;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jlr.core.config.DispatcherFlushConfig;
import com.jlr.core.services.DispatcherFlush;

@Component(immediate = true, service = Runnable.class)
@Designate(ocd = DispatcherFlushConfig.class)
public class DispatcherFlushScheduler implements Runnable {

	@Reference
	DispatcherFlush dispatcherFlush;

	String cronExpression;
	private int schedulerId;
	private String schedulerName;
	private boolean isEnabled;

	/** LOGGER */
	private static final Logger LOGGER = LoggerFactory.getLogger(DispatcherFlushScheduler.class);

	@Reference
	private Scheduler scheduler;

	@Activate
	public void activate(DispatcherFlushConfig config) {
		addScheduler(config);
	}

	@Modified
	protected void modified(DispatcherFlushConfig config) {
		removeScheduler();
		if (null != schedulerName) {
			schedulerId = schedulerName.hashCode();
		}
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(DispatcherFlushConfig config) {
		removeScheduler();
	}

	private void removeScheduler() {
		scheduler.unschedule(String.valueOf(schedulerId));
	}

	private void addScheduler(DispatcherFlushConfig config) {
		isEnabled = config.serviceEnabled();
		if (isEnabled) {
			schedulerName = config.schedulerName();
			cronExpression = config.cronExpression();
			ScheduleOptions scheduleOptions = scheduler.EXPR(cronExpression);
			scheduleOptions.canRunConcurrently(false);
			scheduleOptions.name(schedulerName);
			scheduler.schedule(this, scheduleOptions);
			if (LOGGER.isTraceEnabled()) {
				LOGGER.trace("JLR Dispatcher Flush Scheduler is added");
			}
		}
	}

	@Override
	public void run() {

		if (isEnabled) {
			dispatcherFlush.flushDispatcher();
		}
	}
}
