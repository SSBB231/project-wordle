function Banner({ children, variant = 'happy' }) {
  return <div className={`${variant} banner`}>{children}</div>;
}

export default Banner;
