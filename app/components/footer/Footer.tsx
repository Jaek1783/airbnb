const Footer = () => {
    return ( 
        <div className="
            w-full
            p-3
            fixed
            bottom-0
            left-0
            right-0
            bg-black
            text-white
        ">
            <div className="
                flex
                flex-row
                items-center
                justify-around
            ">
                <ul>
                    <li>개인정보를 입력하지 마세요</li>
                    <li>구글과 깃허브로 회원가입이 가능하나 보안을 위해 </li>
                    <li>임의의 아이디와 비밀번호를 이용해 가입하여 프로젝트를 이용 하세요</li>
                </ul>
                <div>이 프로젝트는 포트폴리오 용으로 제작되었습니다</div>
            </div>
           
        </div>
     );
}
 
export default Footer;