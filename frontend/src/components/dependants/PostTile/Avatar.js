function Avatar({ imgSrc }) {
  return (
    <div className="w-full aspect-square rounded-full">
      <img src={imgSrc} />
    </div>
  );
}

export default Avatar;
