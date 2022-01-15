import React from 'react';

const Details = ({user: {id, name}, getUserId}) => {

    return (
        <div>
            {id}-{name}
            <button onClick={() => getUserId(id)}>GetDetails</button>
        </div>
    );
};

export default Details;





// <button onClick={()=>}>GetDetails</button>

//
// {details.length > 0 && (
//     <div>
//         <p>POSTS</p>
//         {details.map(detail => <div key={detail.id}> {detail.id} --- {detail.body} </div>)}
//     </div>
// )
// }