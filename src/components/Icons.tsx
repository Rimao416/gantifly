interface IconProps {
  icon: string;
  top?:string;
  left?:string;
  right?:string;
  bottom?:string;

}
function Icons({ icon, top, left, right, bottom }: IconProps) {
  return <div className="icons icon-container" style={{top:top, left:left, right:right, bottom:bottom}}>
    <img src={icon} alt="icon" />
  </div>;
}

export default Icons;
