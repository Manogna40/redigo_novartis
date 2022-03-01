from django.shortcuts import render
from django.views.generic import CreateView
from .forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required


# Create your views here.
from django.http import HttpResponse

@login_required
def home(request):
    context={}
    return render(request, 'home.html', context)

# def login(request):
#     context={}
#     return render(request, 'login.html', context)

class UserLoginView(CreateView):
    template_name = 'login.html'
    form_class = LoginForm
    context = dict()
    
    def get(self, request, **kwargs):
        self.context['form'] = self.get_form()
        print('in get')
        return render(request, self.template_name, context=self.context)

    def post(self, request, *args, **kwargs):
        self.context.clear()
        print('in post',args,'----',kwargs,request.POST)
        

        form = self.get_form()
        if form.is_valid():
            cleaned_data = form.cleaned_data

            user_obj = authenticate(username=cleaned_data['username'], password=cleaned_data['password'])
            # setattr(user_obj, 'backend', 'django.contrib.auth.backends.RemoteUserBackend')
            print('user_obj',user_obj)
            if user_obj!=None:
                login(request,user_obj)
                return HttpResponseRedirect('/')
        return HttpResponseRedirect('/login')


class UserLogoutView(CreateView):
    context = dict()

    def get(self, request, **kwargs):
        logout(request)
        return HttpResponseRedirect('/login')