$(document).ready ->
  $donateTriggers = $('.donations-grid .donate-trigger')
  $form = $('.form-mailchimp')
    
  $form.bootstrapValidator({
    submitButtons: 'button[type="submit"]'
    fields: {
      EMAIL: {
        validators: {
          notEmpty: {
            message: 'Por favor completa este campo'
          }
          emailAddress: {
            message: 'Introduce un correo electrónico válido'
          }
        }
      }
      FNAME: {
        validators: {
          notEmpty: {
            message: 'Por favor completa este campo'
          }
        } 
      }
    }
    })
      .on 'success.form.bv', (e) ->
        e.preventDefault()
        $form.parent().addClass 'ajax-on-send'
        $this = $(this)
        # console.log $this
        $data = {
          username: $this.find('input[name="username"]').val()
          dc: $this.find('input[name="dc"]').val()
          u: $this.find('input[name="u"]').val()
          id: $this.find('input[name="id"]').val()
        }
        # console.log $data
        # REGISTER & SEND TO PAYPAL
        register($this, $data)
        return

  $('.overlay-error button').click (e)->
    e.preventDefault()
    $('.modal-content').removeClass('ajax-on-send ajax-error')
    return
  return

register = ($form, $data) ->
  $modalContent = $form.parent()
  $.ajax({
    type: $form.attr('method')
    url: '//' + $data.username + '.' + $data.dc + '.list-manage.com/subscribe/post-json?u=' + $data.u + '&id=' + $data.id
    data: $form.serialize()
    cache: false
    dataType: 'jsonp'
    jsonp: 'c'
    contentType: "application/json; charset=utf-8"
    error: (err) -> 
      console.log err
      $modalContent.addClass 'ajax-error'
      return
    success: (data) -> 
      if (data.result != "success") 
        $modalContent.addClass 'ajax-error'
        console.log data
      else 
        console.log data
        $modalContent.addClass 'ajax-success'

        $form.find('input[name="EMAIL"]').val('')
        $form.find('input[name="FNAME"]').val('')
        $form.find('input[name="LNAME"]').val('')
        $form.find('textarea[name="MESSAGE"]').val('')
        return
    })
  return

resetFields = ->
  $modalContent = $('.modal-content')
  $form = $('.form-mailchimp')
  $modalContent
    .removeClass('ajax-success')
    .removeClass('ajax-error')
    .removeClass('ajax-on-send')
  $modalContent.find($form).find('input[type=text], textarea').val('')
  return


















