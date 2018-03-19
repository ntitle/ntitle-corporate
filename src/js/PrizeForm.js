class PrizeForm {
    constructor() {
        this.newsletterFormUrl = 'https://network.us17.list-manage.com/subscribe/post-json?u=38836b86bdc2b88a242addc37&id=1bf326666b';
        this.codeApiUrl = 'https://prize-api.ntitle.network/codes/assign';
        this.formSubmitted = false;
        this.newsletterEmailValid = undefined;
        this.code = '';
        this.email = '';
        this.codeStatus = {};
    }

    init() {
        this.form = document.querySelector('.prize-form');
        this.emailInput = document.querySelector('.prize-form__email');
        this.codeInput = document.querySelector('.prize-form__code');
        this.message = document.querySelector('.prize-form__message-container');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
    }

    onFormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        this.email = this.emailInput.value;
        this.code = this.codeInput.value;

        this.message.innerHTML = '';

        this.submitCode();
    }

    signToNewsletter() {
        return $.ajax({
            type: 'GET',
            url: this.newsletterFormUrl,
            data: {
                EMAIL: this.email,
            },
            cache: false,
            dataType: 'jsonp',
            jsonp: 'c', // trigger MailChimp to return a JSONP response
            contentType: 'application/json; charset=utf-8',
        });

    }

    submitCode() {
        this.callCodeApi()
            .done(req => {
                this.codeStatus = req.data;

                if (this.codeStatus.redeemed) {
                    this.showMessage('Sorry, this code has been used', 'error');
                    return;
                } else {
                    this.showMessage(`You have successfully redeemed ${this.codeStatus.ntl} NDT! You will be notified via email.`, 'success')
                }

                this.signToNewsletter()
                    .succcess(status => {
                        if (data.result === 'error') {
                            this.newsletterEmailValid = false;

                        } else {
                            this.newsletterEmailValid = true;
                        }

                        this.showMessage('Email has been submitted, check your inbox', 'success');
                    }).catch(err => {
                    this.showMessage('Email can\'t be submitted to newsletter. Maybe you are already signed?', 'error');
                });
            })
            .fail(err => {
                this.showMessage('Sorry, code not valid', 'error');
            });

    }

    callCodeApi() {
        return $.post(this.codeApiUrl, {
            code: this.code,
            email: this.email,
        });
    }

    showMessage(message, type) {
        const el = document.createElement('p');
        el.classList.add('prize-form__message');
        el.classList.add(`prize-form__message--${type}`);
        el.textContent = message;
        this.message.appendChild(el)
    }


}

if (document.querySelector('.prize-form')) {
    const form = new PrizeForm();
    form.init();
}
