/**
 * Suggested questions component
 * 
 * Per PRD v0.1:
 * - suggest_questions(questions[]) is an approved UI action
 * - Help users get started with common queries
 */
export default function SuggestedQuestions({ questions, onSelect }) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="suggested-questions">
      <span className="suggested-questions-label">Try asking:</span>
      <div className="suggested-questions-list">
        {questions.map((question, index) => (
          <button
            key={index}
            className="suggested-question"
            onClick={() => onSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
