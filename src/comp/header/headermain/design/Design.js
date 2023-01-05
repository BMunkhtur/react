const DesignBtn = ({design}) => {
    return <button id= {`${design.name}`} className = "designBtn">
            <img src={`${design.imageURL}`} alt="" />
            
            <div className="title">{design.name}</div>
        </button>
}
export default DesignBtn;