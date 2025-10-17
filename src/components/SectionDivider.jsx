const SectionDivider = ({ src, position = 'top', flipY = false }) => {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';
  const flipClass = flipY ? 'transform scale-y-[-1]' : '';
  return (
    <div className={`absolute left-0 w-full  overflow-hidden pointer-events-none ${positionClass} ${flipClass}`} style={{ height: '100px'  }}>
      <img src={src} alt="section divider" className="w-full h-full object-cover" />
    </div>
  );
}; export default SectionDivider
