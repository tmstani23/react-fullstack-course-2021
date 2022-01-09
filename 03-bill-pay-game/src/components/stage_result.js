import React, {useContext} from 'react';
import {GlobalContext} from '../context/'


const StageResult = () =>  {

  const context = useContext(GlobalContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>The loser is:</h3>
        <div>{context.state.result}</div>
        <div className="action_button" onClick={() => context.resetGame()}>
          start over
        </div>
        <div className="action_button btn_2" onClick={() => context.getNewLoser()}>
          Get new loser
        </div>
      </div>
    </>
    
  );
}

export default StageResult;
