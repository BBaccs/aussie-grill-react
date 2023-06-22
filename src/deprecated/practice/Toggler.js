import useToggle from './useToggle';

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
    return (
        <div>
             <h2 onClick={toggleIsHappy}>{isHappy ? "yes" : "no"}</h2>
             <h2 onClick={toggleIsHeartBroken}>{isHeartBroken ? "a" : "b"}</h2>
        </div>
    )
}

export default Toggler;