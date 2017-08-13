$(function() {

	var $topbar = $('.topbar'),
		$sidebar = $('.sidebar'),
		$dashboard = $('#dashboardId'),
		$dashboardParent = $dashboard.parent('.sidebar__nav-item'),
		$dashboardList = $('.sidebar__dashboard-list'),
		$sidebarBtn = $('.sidebar__btn'),
		$body = $(document.body).get(0);

	function changeSidebarPos() {
		$sidebar.css("left", $topbar.position().left);
	}

	function setBigSidebar() {
		$sidebar.removeClass('sidebar--small');
		$body.style.setProperty("--sidebar-width", "314px");
		$sidebarBtn.removeClass('sidebar__btn--rotate');
	}

	function setSmallSidebar() {
		$sidebar.addClass('sidebar--small');
		$body.style.setProperty("--sidebar-width", "120px");
		$sidebarBtn.addClass('sidebar__btn--rotate');
	}

	function openDashboard() {
		$dashboardList.slideDown(300);
		$dashboardParent.addClass('opened');
	}

	function closeDashboard() {
		$dashboardList.slideUp(300);
		$dashboardParent.removeClass('opened');
	}

	$(window).on('resize', function(e) {
		changeSidebarPos();
	});

	$($dashboard).on('click', function(e) {
		e.preventDefault();

		if ($dashboardParent.hasClass('opened')) {
			closeDashboard();
		} else {
			openDashboard();
		}
	});

	$($sidebarBtn).on('click', function() {
		if ($sidebar.hasClass('sidebar--small')) {
			setBigSidebar();
		} else {
			setSmallSidebar();
		}
	})

});
