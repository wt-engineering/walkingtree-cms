export default function Stats(props){
    return (
        <>
            <div className="wrapper">
                <div className="stats flexItems">
                    <div className="stat">
                        <div className="number smallHeading">3</div>
                        <div className="statText description">Ateliers</div>
                    </div>
                    <div className="stat">
                        <div className="number smallHeading">4</div>
                        <div className="statText description">Studios</div>
                    </div>
                    <div className="stat">
                        <div className="number smallHeading">1600 +</div>
                        <div className="statText description">Employees</div>
                    </div>
                    <div className="stat">
                        <div className="number smallHeading">60 +</div>
                        <div className="statText description">Artisans</div>
                    </div>
                    <div className="stat">
                        <div className="number smallHeading">100 +</div>
                        <div className="statText description">Collections</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .stat{
                    flex:1 0 auto;
                    width:20%;
                    text-align:center
                }
            `}</style>
        </>
    )
}