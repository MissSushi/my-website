type TimeLineItemProps = {
  jobTitle: string;
  dateTime: string;
  readableDate: string;
};

const TimeLineItem = ({
  jobTitle,
  dateTime,
  readableDate,
}: TimeLineItemProps) => {
  return (
    <div className="relative pb-8 group">
      <span
        className="absolute left-3 top-1 -ml-px h-full w-0.5 bg-gray-200 group-last:hidden"
        aria-hidden="true"
      ></span>
      <div className="relative flex space-x-3">
        <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center"></div>
        <div className="flex gap-1.5 flex-col-reverse md:flex-row min-w-0 flex-1 md:justify-between space-x-4 md:pt-1.5">
          <div className="bg-zinc-800 rounded-lg shadow-lg px-4 py-2">
            <p>{jobTitle}</p>
          </div>
          <div className="whitespace-nowrap md:text-right text-sm text-gray-500">
            <time dateTime={dateTime}>{readableDate}</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
export { type TimeLineItemProps };
