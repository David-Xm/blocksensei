import "./Quest.css";

const Quest = () => {
  return (
    <div className='mainquestcontainer'>
      <h2 className='py-6 font-semibold text-2xl'>My Quests</h2>

      <div className='quest-banner'>
        <p>
          Quests are challenges that reward your effort. Crush quests, earn
          tokens or achievement badges and climb the Web3 rank.
        </p>
        <button className='close-banner'>×</button>
      </div>

      <div className='invite-friend-card'>
        <div className='invite-text'>
          <h3>Invite a friend</h3>
          <p>Earn 800 blocks & 400 for each friend invited.</p>
        </div>
        <div className='invite-action'>
          <span className='coin'>🪙 500</span>
          <button className='invite-btn'>Invite A Friend</button>
        </div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Complete first lesson
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
        <div className='progress-percent'>0%</div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Score 90% or higher in first lesson
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Score 90% or higher in all basic lessons
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
        <div className='progress-count'>0/10</div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Invite 1 friend
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
        <div className='progress-count'>0/10</div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Unlock 10 Achievements
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
        <div className='progress-count'>0/10</div>
      </div>

      <div className='quest-item'>
        <div className='quest-label'>
          Earn 50k blocks
          <span className='reward-icon'>🎒</span>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: "0%" }}></div>
        </div>
        <div className='progress-count'>0/10</div>
      </div>
    </div>
  );
};

export default Quest;
