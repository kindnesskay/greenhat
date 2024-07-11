"use client";
import { useForm, Resolver } from "react-hook-form";
import { uid } from "uid";
import { UseApp } from "@/context/AppContext";
import LoaidingComponent from "@/components/Loading";
import { useEffect, useState } from "react";
type formValues = {
  title: string;
  note: string;
  profit: number;
  loss: number;
};

const resolver: Resolver<formValues> = async (values) => {
  return {
    values: values ? values : {},
    errors: {
      ...(values.title
        ? {}
        : {
            title: {
              type: "required",
              message: "Please add a title",
            },
          }),

      ...(values.note
        ? {}
        : {
            note: {
              type: "required",
              message: "Please add a note",
            },
          }),
    },
  };
};
export default function Form() {
  const { database, isLoading, setIsLoading } = UseApp();
  const [profit, setProfit] = useState<string | number>("");
  const [loss, setLoss] = useState<string | number>("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    const template = {
      id: uid().toString(),
      date: new Date().toString(),
      ...data,
      loss: Number(loss),
      profit: Number(profit),
    };

    setIsLoading(true);
    database.save(template);
    reset();
    setProfit("");
    setLoss("");
  });

  return (
    <>
      {isLoading ? (
        <LoaidingComponent />
      ) : (
        <form
          className="w-full flex flex-col gap-4 text-gray-700"
          onSubmit={onSubmit}
        >
          <h1 className="text-2xl font-semibold">Record a new entry</h1>
          <div className="w-full">
            <label htmlFor="title-input" className="block mb-2 pl-1 textlg">
              Instrument
            </label>
            <input
              {...register("title")}
              type="text"
              id="title-input"
              className="bg-gray-50 border  border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
            />
            {errors?.title && <p>{errors.title.message}</p>}
          </div>
          {/* note */}
          <div className="w-full mx-auto">
            <label htmlFor="note" className="block mb-2 pl-1 text-lg">
              Your message
            </label>
            <textarea
              {...register("note")}
              rows={5}
              id="note"
              className="block p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a note..."
            ></textarea>
            {errors?.note && <p>{errors.note.message}</p>}
          </div>
          <div className="w-full flex gap-4">
            {/* profit input */}
            <div className="w-full">
              <label
                htmlFor="profit-input"
                className="block mb-2 pl-1 text-lg "
              >
                Profit
              </label>
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  if (Number(value) >= 0) {
                    setProfit(Number(value));
                  }
                  setLoss(0);

                  if (value.length <= 0) {
                    return setProfit("");
                  }
                }}
                value={profit}
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                id="profit-input"
                className="bg-gray-50 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
              />
              {errors?.profit && <p>{errors.profit.message}</p>}
            </div>
            {/* loss input */}
            <div className="w-full">
              <label htmlFor="loss-input" className="block mb-2 pl-1 text-lg">
                Loss
              </label>
              <input
                onChange={(e) => {
                  const value = e.target.value;

                  if (Number(value) >= 0) {
                    setLoss(Number(value));
                  }

                  setProfit(0);

                  if (value.length <= 0) {
                    return setLoss("");
                  }
                }}
                value={loss}
                type="number"
                id="loss-input"
                pattern="[0-9]*"
                inputMode="numeric"
                className="bg-gray-50 border border-gray-500 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
              />
            </div>
          </div>
          {errors?.loss && <p>{errors.loss.message}</p>}
          <button className="text-white text-xl h-16 bg-gray-700 hover:bg-gray-800 font-medium rounded-lg  w-full sm:w-auto px-5 py-4 text-center">
            Save
          </button>
        </form>
      )}
    </>
  );
}
