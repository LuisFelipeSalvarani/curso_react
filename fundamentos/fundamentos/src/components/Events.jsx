const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    };

    return (
        <>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </>
    );
};

export default Events;