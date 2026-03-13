export default function Friend({friend}){
    console.log(friend);
    const {name, email, phone, website, address:{street, suite, city}} = friend;
    
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <p>Website: {website}</p>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
        </div>
    )
}