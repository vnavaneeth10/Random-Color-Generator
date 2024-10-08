import { useEffect, useState } from "react"




export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function randomColorUtility(length) {
        return  Math.floor(Math.random()*length);
        
    
    }

    function handleCreateRandomHexColor () {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor ="#";
        console.log(hex.length)

        for(let i=0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)]
            
        }
        console.log(hexColor)
        setColor(hexColor);
    }

    function handleCreateRgbColor () {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);

    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRgbColor()
        else handleCreateRandomHexColor()
    },[typeOfColor])

    return <div className="container" style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>
        <div style={{
            display:'flex',
            justifyContent: 'center',
            
        }}>

        <button style={{marginTop: '10px',
                        padding:'12px',
                        fontWeight:'bolder',
                        fontSize:'20px',
                        borderRadius:'7px',
                        marginRight:'12px',
                        border:'4px color solid',
        }} onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>

        <button style={{marginTop: '10px',
                        padding:'12px',
                        fontWeight:'bolder',
                        fontSize:'20px',
                        borderRadius:'7px',
                        marginRight:'12px',
                        border:'4px color solid',}} onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>

        <button style={{marginTop: '10px',
                        padding:'12px',
                        fontWeight:'bolder',
                        fontSize:'20px',
                        borderRadius:'7px',
                        marginRight:'12px',
                        border:'4px color solid',}}
        onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRgbColor}>Generate Random Color</button>

        </div>

        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color:'#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection : 'column',
            gap:'21px',
        }}>
            <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}