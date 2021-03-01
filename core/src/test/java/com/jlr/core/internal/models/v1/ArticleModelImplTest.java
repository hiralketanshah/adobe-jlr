/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.jlr.core.internal.models.v1;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.jlr.core.models.ArticleModel;
import com.jlr.core.pojos.CTAPojo;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

/**
 * Simple JUnit test verifying the HelloWorldModel
 */
@ExtendWith(AemContextExtension.class)
class ArticleModelImplTest {

    private ArticleModel articleModel;

    private Resource resource;

    @BeforeEach
    public void setup(AemContext context) {
        context.load().json("/content/jlr/article/article.json", "/content/jlr/article.html");
        resource = context.resourceResolver().getResource("/content/jlr/article.html");
        articleModel = resource.adaptTo(ArticleModel.class);
    }

    @Test
    void testProperties() {
        assertEquals("test_title", articleModel.getTitle());
        assertEquals("test_subtitle", articleModel.getSubtitle());
        assertEquals("test_copy", articleModel.getCopy());
    }

    @Test
    void testImageProperties() {
        assertEquals("/content/dam/test.png", articleModel.getFileReference());
        assertEquals("test_imageAlt", articleModel.getImageAlt());
        assertEquals("/content/jlr/au.html", articleModel.getImageLink());
    }

    @Test
    void testCtaProperties() {
        List<CTAPojo> list = articleModel.getCtaList();
        assertEquals(1, list.size());
        list.forEach(item -> {
            assertEquals("test_text", item.getText());
            assertEquals("http://www.google.com", item.getLink());
            assertEquals("_self", item.getTarget());
        });

    }

}
