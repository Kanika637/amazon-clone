import React from 'react'
import './Header.css' 
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
    const[{basket,user},dispatch]=useStateValue();  

    {/*this will help you 
    signout*/}
    const handleAuthentication=()=>
    

    {if(user)
        {auth.signOut();}

    }
    return (
        <div className="header">
            <Link to="/">
          <img className="header__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABL1BMVEUAAAD////8/PwAAANvb29YWFj5+fnq6upoaGgAAAYAAwCGhoZGRkZVVVVjY2NBQUH/gwB9fX2xsbHMzMzk5OT/ggDx8fEjIyPb29ucnJzQ0NC7u7tPT0/ExMQ1NTUHAACoqKiRkZEqKioQEBAaGhopKSn6hQZ3d3eXl5ehoaEzMzOBgYEAAA0QAADUfx6Li4tiPxzsjSfxixpXMhEsEgRCJgpNMRIxGAV+ShejZCTHfCzjjCzqiiucZzBlOBQwHBG2cSv3ixR7TiTEhUuITxIYAArEdiVcPybbkklLNiWUaT9OLgswIAcjGAIYEQAdEACLWCWjWx90Oxf7iSTTiiyOXBc8HQu9aSWsaTPjgi7EhDX0kAW7cySEUCIgBQFbPw2abSVcNRehZxhnLRpNOBjzlERKAAAMeElEQVR4nO2ai1/bRhLHZcmRLMdg44cwNn7xkA0YiE1MwCZgcZS217Qlz7sU4l569///Dbe72pmVhEOK49gJn/nyIUGv1eqnmdmZXWkaQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8QnWFxvlIqOU3UndcdpmvLHSaqbVjmqztdKIL487d3WnXuJNlhuPJunRo6XGVmtnceOuc9LN1lajuT1J85OzWnZiiFncCR6rW3lOZZ1JlfVPMytV/9hCzhQ7nHI60uJmI6+rJq2tauDYctEaRyNwSipryUudSkjq7ZLojcW7mIK7V6J3/4psZPUY/1EUA9YF+1NayorpfIv9Ogv8UAuu0mNmM9TkjuOfJ9FjzmN1MBUbS0mdURcN6/6lscqmOhKXJ+fYnya2bsa/ijBjSFuxiFbs7ot42PT7rKe2HZCGSeawl9lSerD/g2qVo0Kw43U8+gmxcnC8Woyh1Lp6NYK43JvTFvw3J/oT7O9XJW1hdwOCOWtwHASqViJ2sBh+VkeFDqWVHmgSbeszlrVm3TqktADLqmjF0Bn59VlopZVCRoWyleG4FMvciZyXKEWssQ5X7INGoeO6A970GbFKAYnhDwdiHoq1E+nv0iy0ehwD1zeLuaKDHTWhe2DrTthVY07UdYvygjUHo02+VLLUCft3iyVfTx3PN/MO/g1KglilfOTqnDYD8uLJmER17kabZVQAYiaIpQIuPn5YrJgc5VuonhjHdkzYhufZyOWBoqXizqo4mJYxMqavbGsbixZc3AyLdevu1gy0wre8InfkojtUn8xss1kOuoheebxfUcflAA7BpCjDCPpvfsz9VXjbCu5gV/h2WHXktrwYxWKGl00ksqo7a2NanzIt+STgQypsQ9DC3jirod7CIJVAa/MToipcsApNWtJWnNtBuIkPK/1s2ZRSQIdacLeEFrw900q0v4Sj5l259JRIWGbwvXI3kN0Bp4HREEJOBbvbhB3ygf0haxlSRbxHCa64lY0vY3hzpFkuQeOQGFehP/7LU2LJwRUHxVkkDxvV9OLSVh2NeA2CKoRUDCrSLprQO4gS+9HubqcX4o1sAm+BOcetqqiCkQe0gSigo6FAJPftEg0b3kUDXtXM8tIAyyBWxLLQL1ahu+Cn8bAb3gbjUlSsfRw0KnLPOkhjRa/W9Uf+zSJ3T8COpjZrltPxT4kFz5OGKAMjAHZ3rFgb1RS4YVSsFHhYzIIjKWgcYyikEnpM1I4oFpjiAlwxS7HSSyvlkuWYGM+jYsGrxKAGhS8OCRGxNhOtbC7vmCb6WkSsIkZ3dFlsSxWKGOHrfAvFAq9DxWeSlXIeZa1g1jJGrFgsK7dRLChfxlpWdaVoqrbGirWFTljHfZiXV6K7ZJoWj95s1mIlwmXWWLF0JRaod4dY22VMYIMvISSWKi2VyykzUmKhPPnQ1pzEquMThazrk5b1ebESTji/HifWBtRBurmq9m7BqViaquZFzEexYCJitmKVA3VMvpjLwVNOLlY8ILtVLFWscW6o6qrgpN8YsdACHdn2HMWS3WOWUNzhydY6vPGJxVrFYtDaEtlSeYxYTZxHDFXAK9CWcsPxlqXPQ6wUdrrl79gcnzrcQ6wiaFWSM1xjxJIlH69aQjXdY2hLjYZoS8Xg1lzEKoNYdblj7UvFwhwV5+PGiJWTQU2PpEdhZQThAXKeYi3DrRyo26rja8O/L1Y5FpUBSxgUqxWDsAatSrA8UDMU6JmifJ2nWPigGFCxu5Ha8G+LhbN9OMeAmYnK03U5cxidDcZiC3N6LSvV8dWYp1jh9JiDdfKEYm2AzZh4E1xmg/Ck8jqnWMyVt5bU9D0GPMwnwC79qdt5ioVDdR324BQBOMI9xarCFoqlZsDkCFCP3cKqS3Fgfg3noDdBjGKosbmKBREqpRbj5KNNKhY6HdbRsontQB3k30oMMTkhVxoMEyI8jo9+OjZPsTB6wvqEejJIde7vhlJsmWzuqxbDnhTFn/8rweV+cb0BC9tybWieYqmOl3ioXauo3BtWl+4b4GEpVi72NVTdI2vh8CIWHpTDJ7bm8Ms3S7CeshXu8DzEWlNeZ2VbwS8edHjV9xUrh+vWZmUlWwwu4usi80XHitIMXR8zc9mKA9W4tT5/saBr+NECjx+6fJn+nNF9xVqKagCLaLzJnBBrXJGNiVnavF2F6zh9NdfacCEy18CKlLJYdtVhEePeUzThCR/+XcQKLtnwoLUTk/e0SrlKhS/syvNuLQ1iC1CLzbuQrkfeYwWeVpeD973FWgiNdsyDFtg4Iky3IsoE7oZ6PhuvyqJho9rM5oMp/+PIWreutJr3FE02FjQubk1i2sCEqV5dRo2/P0WTCKlV4tZUCrTA0t5ydN1qfbESmFyOWyG1nED9+InJP11Nyn9d4vjZgFnxU0NmG86tpShYn8CPXCCMwJRMDD8pq1Zw3Mj7L3w9F3Clx8Fvzwz4Ix2QZL2uhhozG/g8S3sEAkIb23DmjD460h61spVKsOpItdSXepuLAjVnXE2IHeqbqZR/RnBJuLpfZy3WG1i0JBv3e5iNpSz/PrCY3YkuCfk3U3qn/R2r2nwxjFrN+Pxp96am2TZrt/bD097h4eGzXbbLtsedOJtvrqZAUquxR0pqdnvaehkGa/HZ0XF/0Ol0O93uSf/5qdauTfkuM6XW1s7OjKQhjGCqtI3ak+FJ13PdTCYjfr3OOTOuKd9mltTau//oX/xgJJPJaTd9cNnlGnFcppjrFdzj71ss1vlh19s7mr4f/viT53YHncEegzmiyyUbTvcWs6Zm2Npxx+32T2vadNX6+Z9XR7/0Xvz6W+2335/1rgau6zHL+hojycxgYtna+YnL5Holdtht7ig8ik38XCyyi+jOBz/DYA0abU17yT3x7fctFsfQTt94Gbe7d/4DGx5tg3tkUjMmF0sMhZwaGz+4Zu2k/crzCt658V2PhgLD7l2+dt1C983bnthkT8mfakK5xLUaS0j4IKu9e/KibSftI9Z+pzf5G/h2MOxdFrgKGff65F9PRhofJIUzTtweE6VW44785N/vu388Yy09Z27YHz0EsViyzVzx2i0UPK+7d9GTufaEPmNA1vbuot9ho+CbHmv+huUOz79A/28H5jFtbXTcEQlRxuv0r3q72uRRi19Ye/fBz7PcwbmWbI8GBbd7yAuGqXZ8HghZ2u3TvetM4drNMH8c9I9PR9zAbC3JYhAzFn6eyFyTws2Y8Uj4ARHjkuKHMzq44Ml7plAodP84YOHL+JOlpJe7bOT4/sXysZlxDTyePIq0u9sffuiNxBEuAUsBbK6RbQQtjgdxvpNVAEnDaPPM9uz8+JJVOczt2O/J8UgzWJ3+n0zB+6C17YeiFSup21rvLzYsMphN8Gquuzf88PGsxocAPw5xUZIyM7AFzKh4MsWl1J4dHv31ZuB5vtqFTPfmHb+ypo3eu5m9kWbXHoxYvsl8vGGhRggmajrv9euTy+HVweEZnOZrhB7oF3uj3sHRXzcnHaGT6/P6/amfcWna6Wuvy0qqB5BmAUk+3LNn/7PfFdMEBfYj62A2SL6/vDm+evXxsPfs6Ug+8+7o7Ozng9Oj4+HNXofPL7holey//vkuc08/SA3d6z927S9KR74xeNRhuTv7PbjpeDCxwi2MPX7B9TXrdvzaWDAYdDqetEF+klSLbXYuj3a1tuG7rNbrFN6/4BZmPJigZfDRruaPjb88f9P1rYRbGIqQKYCxZTJq+oWJmBFW6Nuj650MT3d5HcCrJh7LXl6//68YJR5CUnobQ3v64fJE2gzXCaxGiIYG5CuIcnL/87p9ltUaoXmrn96cag8oXkURY98Zy8BZ2iX9UBgVmpiK424gpvN89qM/dgZb+5Gpl2zP61m+OknNnzv95eLyRCZNAZmCrujvZvHK63aGFwd8XSJ5a96VJ2Lf9RzpnfgpFMtE29qvT676e91rz3MhfQrZF9eJWdSgf3X6TqpiG0YkOLUfrlKacEOWataShj8Z+PTg6OXlHrMxz8MMwZWj42Dv5vjof79z59PE+TZksIhhJ4321Cf5vyFEps7+qfH1P6FY7cXhwdHb4+Hw5lIwHB5fHL2CFUFDk4VhLQl/KYwHLhbxxchCh3lacNKBGIsopJlr1kT9TGLdCcw12JBJPdxU88uxhQOqbbKse0BiEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBfKv8H9psJ5T/1WkoAAAAAElFTkSuQmCC" alt="Header"/>  
          </Link>
        <div
        className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
            <div className="header__nav">
                {/*if there is no user then only go to login pg*/}
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} 
                className="header__option">
                    <span className="header__optionLineOne">
                        Hello, {user?.email}
                    </span>
                    {/*this will handle tyhe authentication
                    if user is already signed in it will show 
                    signout*/}
                    <span className="header__optionLineTwo">{user?'Sign Out'
                    :'Sign In'}
                        
                    </span>

                </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                    
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                    
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    {/* <ShoppingBasketIcon/> */}
                    <AddShoppingCartIcon fontSize='large'/>
                    <span classNAme="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>

        </div>
        
        </div>
    )
}

export default Header

