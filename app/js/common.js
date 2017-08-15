$(function() {

	var $topbar = $('.topbar'),
		$sidebar = $('.sidebar'),
		$mobileNav = $('.mobile-nav');

	$($sidebar)
		.clone()
		.addClass('sidebar-mobile')
		.appendTo($mobileNav);

	var	$dashboardLink = $('.sidebar__nav-link--dashboard'),
		$dashboardParent = $dashboardLink.parent('.sidebar__nav-item'),
		$dashboardList = $('.sidebar__dashboard-list'),
		$btn = $('.btn'),
		$burger = $('#burger'),
		$body = $(document.body).get(0),
		$sidebarUserCont = $('.sidebar__user-cont'),
		btnClicked = false;
		
	// console.log('!!');
	$('.content__table').stacktable({headIndex : 1});
	// console.log('!!!!!');
	
	function changeSidebarPos() {
		$sidebar.css("left", $topbar.position().left);
	}

	function setBigSidebar() {
		$sidebar.removeClass('sidebar--small');
		$body.style.setProperty("--sidebar-width", "314px");
		$btn.removeClass('btn--rotate');
		$sidebarUserCont.animate({"width": "160px"}, 200);
		
	}

	function setSmallSidebar() {
		$sidebar.addClass('sidebar--small');
		$body.style.setProperty("--sidebar-width", "120px");
		$btn.addClass('btn--rotate');
		$sidebarUserCont.css({"width": "0"});
	}

	function openDashboard() {
		$dashboardList.addClass('visible');
		$dashboardParent.addClass('opened');
	}

	function closeDashboard() {
		$dashboardList.removeClass('visible');
		$dashboardParent.removeClass('opened');
	}

	$(window).bind('load resize', function() {
		changeSidebarPos();
	});

	$($dashboardLink).on('click', function(e) {
		e.preventDefault();

		if ($dashboardParent.hasClass('opened')) closeDashboard();
		else openDashboard();
	});

	$($btn).on('click', function() {
		if ($sidebar.hasClass('sidebar--small')) {
			setBigSidebar();
			btnClicked = false;
		} else {
			setSmallSidebar();
			btnClicked = true;
		}
	})

	$($sidebar).on('mouseenter', function() {
		if ($sidebar.hasClass('sidebar--small')) setBigSidebar();
	});

	$($sidebar).on('mouseleave', function() {
		if (btnClicked) setSmallSidebar();
	});

	$($burger).click(function(){
		$(this).toggleClass('opened');
		$mobileNav.slideToggle(500);
	});

});
