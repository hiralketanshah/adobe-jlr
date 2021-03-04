package com.jlr.core.models;

import java.util.List;

import org.osgi.annotation.versioning.ConsumerType;

import com.jlr.core.pojos.CTAPojo;


/**
 * The Interface SnippetModel.
 */
@ConsumerType
public interface SnippetModel {
 
 /**
  * Gets the cta list.
  *
  * @return the cta list
  */
 default List<CTAPojo> getCtaList() {
     throw new UnsupportedOperationException();
 }
 
 /**
  * Gets the title.
  *
  * @return the title
  */
 default String getTitle() {
     throw new UnsupportedOperationException();
 }
 
 /**
  * Gets the description.
  *
  * @return the description
  */
 default String getDescription() {
     throw new UnsupportedOperationException();
 }
}
