import ItemCard from "./ItemCard";
import data from "./data";

function Home() {
    return (
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="container py-4">
                <div className="row justify-content-center">
                    {data.productData.map((item) => {
                        return (
                            <ItemCard
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                item={item}
                                key={item.id} // Use the unique id as the key
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Home;
