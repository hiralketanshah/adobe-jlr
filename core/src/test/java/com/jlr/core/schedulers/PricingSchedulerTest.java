package com.jlr.core.schedulers;

import static org.junit.jupiter.api.Assertions.assertAll;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.jlr.core.internal.services.FetchPriceImpl;
import com.jlr.core.services.FetchPrice;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * The Class PricingSchedulerTest.
 *
 * @author Adobe
 */
@ExtendWith(AemContextExtension.class)
class PricingSchedulerTest {

    private final AemContext context = new AemContext();

    @InjectMocks
    private PricingScheduler pricingScheduler;

    @Mock
    Scheduler scheduler;

    @Mock
    FetchPrice fetchPrice = new FetchPriceImpl();

    @Mock
    ScheduleOptions scheduleOptions;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        context.runMode("author");
        context.registerService(Scheduler.class, scheduler);
        context.registerService(FetchPrice.class, fetchPrice);
        Mockito.when(scheduler.EXPR(Mockito.any(String.class))).thenReturn(scheduleOptions);
    }

    @Test
    public void testRun() {
        pricingScheduler = context.registerInjectActivateService(new PricingScheduler());
        assertAll(() -> pricingScheduler.run());
    }

}
