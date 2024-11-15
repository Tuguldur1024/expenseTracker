const Response = (props) => {
  const { comment, name } = props;
  console.log(comment);
  return (
    <div className="flex gap-5 ">
      <div
        style={{
          backgroundImage: `url(https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`rounded-full w-[60px] h-[60px] items-center`}
      ></div>
      <div className="flex justify-between flex-col">
        <p className="text-[#0166FF] text-lg font-medium"> {name} </p>
        <p> {comment} </p>
      </div>
    </div>
  );
};

export default Response;
