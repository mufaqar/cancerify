

export async function GetCancerSearch({ cancerSearch }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI || 'https://vni.fe7.mytemp.website'}/api/cancer-search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cancerSearch}),
    }
    );
    

    const data = await res.json();

    return data;
}