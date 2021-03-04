$(()=>{
  window.alert('rectangle');
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(()=>{
    let w = Number($width.val()),
        h = Number($height.val());

    let p = (w+h)*2,
        a = w*h;

    $perimeter.val(p);
    $area.val(a);
  })
});
