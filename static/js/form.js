$(function () {
	// select
	// $('.form-class-b select').change(function(){

	$('body').on('change', '.form-class-b select', function () {
		let isCLass = $(this).hasClass('levelTop');
		let index = $(this).val();
		if (isCLass && index == 3) {
			$(this).siblings('ul').eq(0).show();
			$(this).siblings('ul').eq(1).show();
		} else {
			let selectedIndex = $(this).val() - 1;
			$(this).siblings('ul').hide();
			$(this).find('ul').hide();
			$(this).siblings('ul').eq('' + selectedIndex + '').show();
		}
	});


	$('body').on('click', '.choose-oneLevel', function () {
		let index = $(this).val();
		console.log(index);
		if (index == 3) {
			$(this).parent('.levelTop-grid').siblings('ul').eq(0).show();
			$(this).parent('.levelTop-grid').siblings('ul').eq(1).show();
		} else {
			let selectedIndex = $(this).val() - 1;
			$(this).parent('.levelTop-grid').siblings('ul').hide();
			$(this).parent('.levelTop-grid').find('ul').hide();
			$(this).parent('.levelTop-grid').siblings('ul').eq('' + selectedIndex + '').show();
		}
	});



	//复选框 导出结果   choose-checkbox-ul
	// $('.choose-checkbox-ul').click(function(){
	$('body').on('click', '.choose-checkbox-ul', function () {
		let index = $(this).val();
		let flag = $(this).is(":checked");
		if (flag) {
			$(this).parents('.choose-checkbox-div').siblings('ul').eq('' + index + '').show();
		} else {
			$(this).parents('.choose-checkbox-div').siblings('ul').eq('' + index + '').hide();
		}
	});

	//单选框 选择
	$('body').on('click', '.radio-checkbox-ul', function () {
		let index = $(this).val();
		$(this).parents('.choose-checkbox-div').siblings('ul').hide();
		$(this).parents('.choose-checkbox-div').siblings('ul').eq('' + index + '').show();
	});


	//复选框选择 其他的时候弹出 用户自己填写的输入框
	$('body').on('click', '.checkbox-other', function () {
		// $('.checkbox-other').click(function(){
		if ($(this).is(":checked")) {
			$(this).parents('.checkbox-other-grid').siblings('.input-other').show();
		} else {
			$(this).parents('.checkbox-other-grid').siblings('.input-other').hide();
		}
	})

	$('body').on('click', '.select-other', function () {
		let length = $(this).children().length - 1;
		let index = $(this).val();
		if (length == index) {
			console.log($(this).siblings('.input-other'));
			$(this).siblings('.input-other').show();
		} else {
			$(this).siblings('.input-other').hide();
		}
	})


	// 新增新的表单
	$('body').on('click', '#add-new-form', function () {
		let content = $('.add-form-obj').eq(0).html();
		let length = $('.add-form-obj').length;
		if (length - 1 >= 3) {
			$(this).hide();
		}
		$('#form').append('<div class="form-class-b add-form-obj">' + content + '</div>');
		$('#form .add-form-obj').eq('' + length + '').find('ul').hide();
	});

	//删除表单  防止用户点错
	$('body').on('click', '.delete-form', function () {
		let length = $('.add-form-obj').length;
		if (length > 1) {
			$(this).parents('.add-form-obj').remove();
		}
	});

	$('[data-toggle="tooltip"]').tooltip();

	//特殊处理
	$('body').on('change', '.special-select', function () {
		let val = $(this).val();
		if (val == '自定义') {
			$(this).parents('.flex-layout').siblings('.special-input').show();
		} else {
			$(this).parents('.flex-layout').siblings('.special-input').hide();
		}
	});

	$('body').on('blur', '.must-write', function () {
		let name = $(this).val();
		if (name == '') {
			$(this).parents('.flex-layout').siblings('.must-red').show();
		} else {
			let flag = $(this).siblings('.must-write');
			if (flag.length < 0) {
				$(this).parents('.flex-layout').siblings('.must-red').hide();
			} else {
				let val = $(this).siblings('.must-write').val();
				if (val == '') {
					$(this).parents('.flex-layout').siblings('.must-red').show();
				} else {
					$(this).parents('.flex-layout').siblings('.must-red').hide();
				}
			}
		}
	})


	$('body').on('blur', '.most-200', function () {
		let num = $(this).val();
		if (num < 200) {
			$(this).parents('.flex-layout').siblings('.must-red').show();
		}
	})

	$('body').on('blur', '.most-500', function () {
		let num = $(this).val();
		if (num < 500) {
			$(this).parents('.flex-layout').siblings('.must-red').show();
		}
	})


	$('#submit-form').click(function () {
		let mustArr = $('body').find('.must-red');
		let flag = true;
		for (var i = 0; i < mustArr.length; i++) {
			if (mustArr[i].style.display == 'block') {
				flag = false;
			}
		}
		let formClassA = $('.form-class-a').is(':hidden');
		if (!formClassA) {
			let isShow = $('.must-top-input');
			for (var j = 0; j < isShow.length; j++) {
				if (isShow[j].value == '') {
					flag = false;
				}
			}
		}
		if (flag) {
			alert('可以提交');
		} else {
			alert('不可以提交');
		}
	});

	$('body').on('click', '.levelTop', function () {
		let name = $(this).val();
		if (name == 2 || name == 4 || name == 5) {
			$('.form-class-a').hide();
		} else {
			$('.form-class-a').show();
		}
	});







})




/*
1.其他的显示的 textarea :
和select同级 添加这段代码：
<div class="input-other">
	<input type="text" class="form-control" placeholder="其他">
</div>

给sleect直接添加 class：select-other

2.特殊的情况 使用特殊的class解决  点击事件

3.使用class 将限制最少多少个的 进行控制   
	200  ：  most-200






*/