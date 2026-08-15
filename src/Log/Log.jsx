function Log({ logTurns }) {
  return (
    <ol id="log">
      {logTurns.map((trun) => {
        return (
          <li key={`${trun.square.row}${trun.square.col}`}>
            {trun.player} selected {trun.square.row},{trun.square.col}
          </li>
        );
      })}
    </ol>
  );
}

export default Log;
