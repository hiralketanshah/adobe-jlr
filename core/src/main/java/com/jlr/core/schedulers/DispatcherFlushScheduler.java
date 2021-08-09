package com.jlr.core.schedulers;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.jlr.core.services.DispatcherFlush;

@Component(immediate = true, service = Runnable.class)
@Designate(ocd = DispatcherFlushScheduler.SchedulerConfig.class)
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
	public void activate(DispatcherFlushScheduler.SchedulerConfig config) {
		addScheduler(config);
	}

	@Modified
	protected void modified(SchedulerConfig config) {
		removeScheduler();
		if (null != schedulerName) {
			schedulerId = schedulerName.hashCode();
		}
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(SchedulerConfig config) {
		removeScheduler();
	}

	private void removeScheduler() {
		scheduler.unschedule(String.valueOf(schedulerId));
	}

	private void addScheduler(SchedulerConfig config) {
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
			LOGGER.trace("JLR Dispatcher Flush Scheduler is added");
		}

	}

	@Override
	public void run() {

		if (isEnabled) {
			dispatcherFlush.flushDispatcher();
		}
	}

	@ObjectClassDefinition(name = "JLR Dispatcher Flush Scheduler Configuration", description = "Dispatchher Flush Scheduler Configuration")
	public @interface SchedulerConfig {

		@AttributeDefinition(name = "Enabled", description = "Enable Scheduler", type = AttributeType.BOOLEAN)
		boolean serviceEnabled() default false;

		@AttributeDefinition(name = "Cron Job Expression", description = "Cron Job Expression", type = AttributeType.STRING)
		public String cronExpression() default "0 0/15 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler name", description = "Scheduler name", type = AttributeType.STRING)
		public String schedulerName() default "JLR Dispatcher Flush Scheduler";

	}

}
