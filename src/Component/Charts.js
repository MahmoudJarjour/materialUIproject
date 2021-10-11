import { subDays } from "date-fns";
import React  from "react";
import { ResponsiveContainer, AreaChart, Area}from 'recharts';

const data=[];
for(let i=30; i>=0;i--){
    data.push({
        data: subDays(new Date(), i).toISOString().substr(0,10),
        value: 1 + Math.random() ,
    });
}



export default function Charts(){
  
    return ( 
        <>
        <ResponsiveContainer width='100%' height={400} >
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}/>
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05}/>
                    </linearGradient>
                </defs>

                <Area dataKey='value' strok='#2451B7' fill='url(#color)'/>
                
            </AreaChart>
    </ResponsiveContainer>
    
        </>
    )
 }