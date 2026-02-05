import Image from "next/image";
import { getSingleFood } from "@/action/server";
import { PlayCircle, MapPin, Leaf, DollarSign } from "lucide-react";

const FoodDetails = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-20 text-gray-500">
        Food not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Image */}
        <div className="relative h-[320px] md:h-full">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {food.title}
            </h1>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                <Leaf size={16} />
                {food.category}
              </span>

              <span className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                <MapPin size={16} />
                {food.area}
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              A delicious <span className="font-medium">{food.category}</span> dish inspired
              by <span className="font-medium">{food.area}</span> cuisine.
              Made with carefully selected ingredients for rich taste and quality.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              <DollarSign className="text-orange-500" />
              {food.price} BDT
            </div>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
              >
                <PlayCircle size={20} />
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
