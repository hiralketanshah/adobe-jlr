package com.jlr.core.pojos;

import com.google.gson.annotations.Expose;

import java.util.List;

/**
 * The type Search pojo.
 */
public class SearchPojo {
    @Expose
    private String query;
    @Expose
    private Long page;
    @Expose
    private String locale;
    @Expose
    private Long maxPage;
    @Expose
    private String resultsTitleText;
    @Expose
    private String noResultsText;
    @Expose
    private List<ResultPojo> results = null;
    @Expose
    private List<Object> suggestions = null;

    /**
     * Gets query.
     *
     * @return the query
     */
    public String getQuery() {
        return query;
    }

    /**
     * Sets query.
     *
     * @param query the query
     */
    public void setQuery(String query) {
        this.query = query;
    }

    /**
     * Gets page.
     *
     * @return the page
     */
    public Long getPage() {
        return page;
    }

    /**
     * Sets page.
     *
     * @param page the page
     */
    public void setPage(Long page) {
        this.page = page;
    }

    /**
     * Gets locale.
     *
     * @return the locale
     */
    public String getLocale() {
        return locale;
    }

    /**
     * Sets locale.
     *
     * @param locale the locale
     */
    public void setLocale(String locale) {
        this.locale = locale;
    }

    /**
     * Gets max page.
     *
     * @return the max page
     */
    public Long getMaxPage() {
        return maxPage;
    }

    /**
     * Sets max page.
     *
     * @param maxPage the max page
     */
    public void setMaxPage(Long maxPage) {
        this.maxPage = maxPage;
    }

    /**
     * Gets results title text.
     *
     * @return the results title text
     */
    public String getResultsTitleText() {
        return resultsTitleText;
    }

    /**
     * Sets results title text.
     *
     * @param resultsTitleText the results title text
     */
    public void setResultsTitleText(String resultsTitleText) {
        this.resultsTitleText = resultsTitleText;
    }

    /**
     * Gets no results text.
     *
     * @return the no results text
     */
    public String getNoResultsText() {
        return noResultsText;
    }

    /**
     * Sets no results text.
     *
     * @param noResultsText the no results text
     */
    public void setNoResultsText(String noResultsText) {
        this.noResultsText = noResultsText;
    }

    /**
     * Gets results.
     *
     * @return the results
     */
    public List<ResultPojo> getResults() {
        return results;
    }

    /**
     * Sets results.
     *
     * @param results the results
     */
    public void setResults(List<ResultPojo> results) {
        this.results = results;
    }

    /**
     * Gets suggestions.
     *
     * @return the suggestions
     */
    public List<Object> getSuggestions() {
        return suggestions;
    }

    /**
     * Sets suggestions.
     *
     * @param suggestions the suggestions
     */
    public void setSuggestions(List<Object> suggestions) {
        this.suggestions = suggestions;
    }
}
