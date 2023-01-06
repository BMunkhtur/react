const DesignBtn = ({design}) => {
    const darah=(name)=>{
        alert("Hello"+ " " +name)
    }
    return <button id= {`${design.name}`} className = "designBtn" onClick={()=>{darah(design.name)}}>
            <img src={`${design.imageURL}`} alt="" />
            <div className="title">{design.name}</div>
        </button>
}
export default DesignBtn;