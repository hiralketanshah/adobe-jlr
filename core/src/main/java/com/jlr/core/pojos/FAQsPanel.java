package com.jlr.core.pojos;
/**
 * FAQsPanel Pojo Class
 * @author Adobe
 *
 */
public class FAQsPanel {

	private String question;
	private String answer;
	private String answerCaveat;
	
	
	public FAQsPanel(String question, String answer, String answerCaveat) {
		super();
		this.question = question;
		this.answer = answer;
		this.answerCaveat = answerCaveat;
	}
	
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getAnswerCaveat() {
		return answerCaveat;
	}
	public void setAnswerCaveat(String answerCaveat) {
		this.answerCaveat = answerCaveat;
	}
	
	
}
