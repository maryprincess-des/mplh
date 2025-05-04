const Experience = ({ data }) => {
  return (
    <>
      <div className="flex justify-between mb-4 text-sm md:text-base">
        <div className="flex flex-col">
          <p>
            <span className="text-white">{data.position}</span> &nbsp;
            {!data.role ? null : <span className="text-white">{`(${data.role})`}</span>}
          </p>
          <p className="text-white">
            {data.company}
          </p>
        </div>

        <div className="text-white capitalize w-28 md:w-36">
          {data.duration.from} - <br />
          {data.duration.to}
        </div>
      </div>
    </>
  )
}

export default Experience