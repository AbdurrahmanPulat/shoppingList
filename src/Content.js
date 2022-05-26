import React from 'react';
import ItemsList from './ItemList';
const Content = ({ items, handleCheck, handleDelete }) => {



    return (
        < >
            {items.length ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
            ) : (
                <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
            )}

        </>
    )
}

export default Content