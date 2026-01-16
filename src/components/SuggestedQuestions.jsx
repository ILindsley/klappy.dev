/**
 * Suggested questions component - quick action buttons
 */

export default function SuggestedQuestions({ questions, onSelect }) {
  if (!questions || questions.length === 0) {
    return null;
  }
  
  return (
    <div className="suggested-questions">
      {questions.map((q, i) => (
        <button
          key={i}
          className="suggested-question"
          onClick={() => onSelect(q)}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
