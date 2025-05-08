interface TrackedImageProps {
  src: string;
  alt: string;
  onLoad: () => void;
  className?: string;
}

const TrackedImage = ({ src, alt, onLoad, className }: TrackedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={onLoad}
      className={className}
    />
  );
};

export default TrackedImage;
