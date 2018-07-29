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
		// $('.select-other').click(function(){
		let length = $(this).children().length - 1;
		let index = $(this).val();
		console.log(length);
		console.log(index);
		if (length == index) {
			$(this).parent('label').siblings('.input-other').show();
		} else {
			$(this).parent('label').siblings('.input-other').hide();
		}
	})


	// 新增新的表单
	$('body').on('click', '#add-new-form', function () {
		// $('#add-new-form').click(function(){
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

	$('[data-toggle="tooltip"]').tooltip()
})


/*
其他的显示的 textarea :
和select同级 添加这段代码：
<div class="input-other">
	<input type="text" class="form-control" placeholder="其他">
</div>

给sleect直接添加 class：select-other

*/