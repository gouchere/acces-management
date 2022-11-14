import "./effect.css"           

const EffectStyle=({maxX, maxY})=>{
    const coefX=maxX*2/0.09
    const coefY=maxY*2/0.15
    const coodonnees=[
        {node:"A", c:{x:0.01, y:0.016}},
        {node:"B", c:{x:0.02, y:0.05}},
        {node:"C", c:{x:0.05, y:0.045}},
        {node:"D", c:{x:0.044, y:0.016}},
        {node:"E", c:{x:0.081, y:0.045}},
        {node:"F", c:{x:0.077, y:0.016}},
        {node:"G", c:{x:0.105, y:0.023}},
    ]

    return (
        <div className="header-effect">
            <svg className="header-effect__circle" >
                {coodonnees.map((current)=>
                   <g key={current.node}>
                     <circle r={7} cx={(current.c.x)*coefX} cy={maxY-(current.c.y*coefY)} fill="#F6DDDD" > </circle>
                     {/* <text  fill="#000" x={0.5+ (current.c.x)*coefX} y={maxY-(current.c.y*coefY)+0.8} fontSize={7} >{current.node}</text> */}
                   </g>
                )}
    
            </svg>
        </div>
    )
}

export default EffectStyle