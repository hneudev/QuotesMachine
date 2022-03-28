
// Componente de fondo para mostrar el autor de la cita
const AuthorBg = ({quote}) => {
  return (
      <svg className="textRepeat">
      <defs>
        <pattern id="Text" x="0" y="0" width="1" height=".15">
          <text x="10" y="135" className="bgText">
          {quote.author}  {quote.author}  {quote.author}  {quote.author}  {quote.author}  {quote.author}
          </text>
        </pattern>
      </defs>
    
      <rect fill="url(#Text)" stroke="black" width="100%" height="100%"/>
    </svg>
)
}
export default AuthorBg;