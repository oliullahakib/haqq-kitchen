import Link from "next/link";
// import CartButton from "../buttons/CartButton";

export default function FoodCard({ food }) {
  const { title, foodImg, category, price, id } = food;

  return (
    <div
      className={`border rounded-xl p-4 shadow hover:shadow-lg transition `}
    >
      <img
        src={foodImg}
        alt={title}
        className="w-full h-44 object-cover rounded-lg"
      />

      <div className="mt-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-xl font-bold mt-2">{price}৳</p>

        <div className="flex gap-3 mt-4">
          {/* <CartButton food={food}></CartButton> */}

          <Link
            href={`/foods/${id}`}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
