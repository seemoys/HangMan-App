
function CounterModal({counter}) {
    return (
        <div style={{ position:'fixed', top:'0', left:'0', right:'0',       bottom:'0', background:'rgba(0, 0, 0, 0.5)', display:'flex', alignItems:'center', justifyContent:'center',color:'white',fontSize:'2em'}}>{counter <= 5 ? 'Game Will Start in '+counter +' Second': '' }</div>
    )
}
export default CounterModal;