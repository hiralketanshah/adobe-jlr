package com.jlr.core.pojos;

/**
 * FAQsPanel Pojo Class.
 *
 * @author Adobe
 */
public class FAQsPanel {

	/** The question. */
	private String question;
	
	/** The answer. */
	private String answer;
	
	/** The answer caveat. */
	private String answerCaveat;
	
	
	/**
	 * Instantiates a new FA qs panel.
	 *
	 * @param question the question
	 * @param answer the answer
	 * @param answerCaveat the answer caveat
	 */
	public FAQsPanel(String question, String answer, String answerCaveat) {
		super();
		this.question = question;
		this.answer = answer;
		this.answerCaveat = answerCaveat;
	}
	
	/**
	 * Gets the question.
	 *
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}
	
	/**
	 * Sets the question.
	 *
	 * @param question the new question
	 */
	public void setQuestion(String question) {
		this.question = question;
	}
	
	/**
	 * Gets the answer.
	 *
	 * @return the answer
	 */
	public String getAnswer() {
		return answer;
	}
	
	/**
	 * Sets the answer.
	 *
	 * @param answer the new answer
	 */
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
	/**
	 * Gets the answer caveat.
	 *
	 * @return the answer caveat
	 */
	public String getAnswerCaveat() {
		return answerCaveat;
	}
	
	/**
	 * Sets the answer caveat.
	 *
	 * @param answerCaveat the new answer caveat
	 */
	public void setAnswerCaveat(String answerCaveat) {
		this.answerCaveat = answerCaveat;
	}
	
	
}
