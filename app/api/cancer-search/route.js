import { NextRequest, NextResponse } from "next/server";


export async function POST(request, response) {
    try{
        const {cancerSearch} = await request.json();

       const data = await fetch(`https://vni.fe7.mytemp.website/wp-json/cancer/v1/search?term=${cancerSearch.toLowerCase()}`).then(res => res.json())
                

       return NextResponse.json({ data }, { status: 200 });

    }catch(error){
        console.log(error);
    }
}