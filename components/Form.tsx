"use client";
import { useForm, Resolver } from "react-hook-form";
import { uid } from "uid";
import { UseApp } from "@/context/AppContext";
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
      ...(values.profit
        ? {}
        : {
            profit: {
              type: "required",
              message: "Please add a profit",
            },
          }),
      ...(values.loss
        ? {}
        : {
            loss: {
              type: "required",
              message: "Please add a loss",
            },
          }),
    },
  };
};
export default function Form() {
  const { database } = UseApp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    const template = {
      id: uid().toString(),
      date: new Date().toDateString(),
      ...data,
    };
    database.save(template);
  });

  return (
    <form
      className="w-full flex flex-col gap-4 text-gray-700"
      onSubmit={onSubmit}
    >
      <h1 className="text-2xl font-semibold">Record a new entry</h1>
      <div className="w-full">
        <label
          htmlFor="title-input"
          className="block mb-2 pl-1 text-md  dark:text-white"
        >
          Title
        </label>
        <input
          {...register("title")}
          type="text"
          id="title-input"
          className="bg-gray-50 border  border-gray-500 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors?.title && <p>{errors.title.message}</p>}
      </div>
      {/* note */}
      <div className="w-full mx-auto">
        <label
          htmlFor="note"
          className="block mb-2 pl-1 text-md dark:text-white"
        >
          Your message
        </label>
        <textarea
          {...register("note")}
          rows={5}
          id="note"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a note..."
        ></textarea>
        {errors?.note && <p>{errors.note.message}</p>}
      </div>
      <div className="w-full flex gap-4">
        {/* profit input */}
        <div className="w-full">
          <label
            htmlFor="profit-input"
            className="block mb-2 pl-1 text-md dark:text-white"
          >
            Profit
          </label>
          <input
            {...register("profit")}
            type="text"
            id="profit-input"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors?.profit && <p>{errors.profit.message}</p>}
        </div>
        {/* loss input */}
        <div className="w-full">
          <label
            htmlFor="loss-input"
            className="block mb-2 pl-1 text-md dark:text-white"
          >
            Loss
          </label>
          <input
            {...register("loss")}
            type="text"
            id="loss-input"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      {errors?.loss && <p>{errors.loss.message}</p>}
      <button className="text-white text-xl h-16 bg-gray-700 hover:bg-gray-800 font-medium rounded-lg  w-full sm:w-auto px-5 py-4 text-center">
        Save
      </button>
    </form>
  );
}
