export function Player() {
  return (
    <div className="w-full flex flex-col gap-3">
      <input
        type="range"
        name="timeline"
        className="timeline"
        value={80}
        max={100}
      />

      <div className="time">
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </div>
  );
}
