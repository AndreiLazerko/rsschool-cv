# ___Lazerko Andrey___
![My-photo](images/My-photo.jpg)<br>
*new student in RS-School*

## ***My Contacts:***
* ![phone](images/phone.png)  +375-44-534-23-24
* ![gmail](images/gmail.png) Lazerabate9119@gmail.com
* ![discord](images/discord.png) lazera1991(Andreilazerko)
* ![vk](images/vk.png) https://vk.com/id22186765
* ![github](images/github.png)AndreiLazerko
* ![Instagram](images/instagram.png)andreilazerko

## **Summary**
I have been studying web development for 2 years now. Started with HTML / CSS, started JavaScript this year. I did a couple of trial works for myself. Completed courses on _Front-End Developer_.

The level of English is still low, but I will study. Great plans and desire to study this topic and this work.

## **Skills**
Basic knowledge:
* HTML, CSS (Bootstrap)
* JavaScript (jQuery)
* PHP/MYSQL
* Adobe Photoshop

## **Code examples**
*for cinema site:*
```
$(document).scroll(function(){
	if($(document).scrollTop()>250){
		/*hat little*/
		$(".header-t").css('padding','6px 0 1px 15px');
		$(".head-0").css('background',' rgba(7,7,7,0.6)');
		$("#logo").attr('src','images/logo-min.png');
	};
	if($(document).scrollTop()<=250)
	{
		/*hat big*/
		$(".header-t").css('padding','25px 0 20px 15px');
		$(".head-0").css('background',' rgba(7,7,7,0.3)');
		$("#logo").attr('src','images/logo-max.png');
	};
});
```
*for shop site:*
```
  const deleteCartItem = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart'));

        const newCart = cart.filter(good => {
            return good.id !==id;
        })

        localStorage.setItem('cart', JSON.stringify(newCart));
        renderCartGoods(JSON.parse(localStorage.getItem('cart')))
    }
```

## **Experience** 
* [Fructcode](fructcode.com)
* [Kursy.by](Kursy.by)

## **Education** 
* 2019
    * online training for [Glo Academy](https://www.youtube.com/c/GloAcademyChannel);
    * online training for [Web Developer Blog](https://www.youtube.com/c/SuprunAlexey).
* 2020: 
    * Institute BELARUSIAN STATE UNIVERSITY OF INFORMATICS AND RADIO ELECTRONICS (electronic security systems);
    * Basics of web-programming on the platform fructcode.com (HTML, CSS, PHP, JS).
* 2021:
    * Completed the course on Front-End Developer.

## **English**
My english level is **Beginner (A1-A2)**. I started learning him only when I realized that I would be Front-End Developer.
