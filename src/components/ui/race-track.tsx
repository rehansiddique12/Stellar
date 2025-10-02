interface RaceTrackPatternProps {
  rows?: number
  cols?: number
  squareSize?: string
  className?: string
}

export default function RaceTrackPattern({
  rows = 3,
  cols = 15,
  squareSize = "w-4 h-4",
  className = "",
}: RaceTrackPatternProps) {
  const generatePattern = () => {
    const squares = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isBlack = (row + col) % 2 === 0;
        squares.push(<div key={`${row}-${col}`} className={`${squareSize} ${isBlack ? "bg-white" : "bg-transparent"}`} />);
      }
    }

    return squares;
  };

  return (
    <div
      className={`inline-grid gap-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {generatePattern()}
    </div>
  );
}

// Example usage component
export function RaceTrackPatternDemo() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Race Track Pattern</h1>

        {/* Default pattern */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Default Pattern</h2>
          <RaceTrackPattern />
        </div>

        {/* Larger squares */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Large Squares</h2>
          <RaceTrackPattern rows={4} cols={8} squareSize="w-12 h-12" />
        </div>

        {/* Smaller pattern */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Small Squares</h2>
          <RaceTrackPattern rows={8} cols={16} squareSize="w-4 h-4" />
        </div>

        {/* Custom styling */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">With Shadow</h2>
          <RaceTrackPattern
            rows={5}
            cols={10}
            squareSize="w-10 h-10"
            className="shadow-lg rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}